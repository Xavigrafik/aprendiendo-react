import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export default function App() {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  // `useQueryClient` es un hook para acceder al cliente de React Query.
  const queryClient = useQueryClient();

  // `useQuery` se encarga de obtener los datos de la API.
  const { data, isLoading } = useQuery({
    // `queryKey`: Es la clave única que React Query usa para identificar y almacenar en caché los datos de esta consulta.
      queryKey: ["posts"],
      
    // `queryFn`: Es la función que realiza la petición a la API.
    queryFn: async () => {
      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      return response.data;
    },
  });

// `useMutation` se utiliza para crear, actualizar o eliminar datos en el servidor.
    const { mutate, isPending, error } = useMutation({
    
        // `mutationFn`: La función que se ejecuta cuando llamas a `mutate()`. Recibe el objeto que pasas a `mutate()` (el nuevo post).
        mutationFn: (post: Post) =>
            axios
                .post<Post>("https://jsonplaceholder.typicode.com/aaposts", post)
                .then((response) => response.data),

        // `onMutate` se ejecuta antes de la petición y recibe el objeto que se va a mutar (`newPost`).
        // Es útil para actualizar la interfaz de forma optimista.
        onMutate: (newPost) => {
            // La `queryClient` actualiza la caché de React Query.
            // Aquí, añadimos el nuevo post al inicio de la lista de forma optimista.
            queryClient.setQueryData<Post[]>(["posts"], (posts = []) => [newPost, ...posts]);

            // Limpiamos los campos del formulario.
            if (titleRef.current?.value && bodyRef.current?.value) {
                titleRef.current.value = "";
                bodyRef.current.value = "";
            }
        },

        onError: (newPost) => {
            queryClient.setQueryData<Post[]>(["posts"], (posts = []) => {
                return posts.filter(
                    (post)=> post.id !== newPost.id
                );
             });
        },

        // `onSuccess` se ejecuta si la petición es exitosa.
        // Recibe el post guardado por el servidor y el post que se envió.
        onSuccess: (savedPost, newPost) => {
            queryClient.setQueryData<Post[]>(
                ["posts"],
                (posts = []) => {
                    // Mapeamos la lista y reemplazamos el post optimista (el que tiene el ID temporal)
                    // por el post real que viene del servidor (con el ID definitivo).
                    return posts.map((post) => {
                        return post.id === newPost.id ? savedPost : post;
                    });
                }
            );
        },
    });

  return (
    <>
          <div className="container">
              <div className="row">
                  
                  <div className="col-5">
                    <h2>Posts App5 mutaciones</h2>
                    <form className="border p-3 mb-5" onSubmit={(e) => {
                            e.preventDefault();
                            if (titleRef.current?.value && bodyRef.current?.value) {
                                mutate({
                                    id: 0,
                                    title: titleRef.current.value,
                                    body: bodyRef.current.value,
                                    userId: 1,
                                });
                            }
                        }}
                    >
                           <input className="form-control" ref={titleRef} type="text" placeholder="Titulo" /><br />
                           <input className="form-control" ref={bodyRef} type="text" placeholder="Cuerpo" /><br />
                           <button className="btn btn-primary" disabled={isPending} >{isPending ? "isPending..." : "Enviar"}</button>
                           {error && <p>Error: { error.message}</p>}
                      </form>
                  </div>

                  <div className="col-8">
                    {isLoading && <p>Cargando...</p>}
                    <ul className="p-4 border">
                          {data?.map((post) => (<li key={post.id}>
                              <strong>{post.title}</strong>
                              <p>{post.body}</p>
                        </li>))}
                    </ul>
                </div>
            </div>
          </div>
    </>
  );
}
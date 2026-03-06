import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function App() {
//   const [count, setCount] = useState(22)

  return (
      <>
          <div className="flex flex-wrap items-center gap-5 md:flex-row">
                
            <Button size="lg" variant="secondary">Button secondary </Button>
            <Button size="lg" variant="outline">Button outline</Button>
            <Button size="lg" variant="ghost">Button ghost</Button>
            <Button size="lg" variant="destructive">Button ghost</Button>
              
            <Button size="lg" variant="outline">Button dark</Button>
                
            <Button variant="outline" size="icon" className="rounded-full">
                <ArrowUpIcon />
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {[1,2,3,4,5,6].map((id) => (
                <Card key={id} className="w-full max-w-sm mt-5 ">
                <CardHeader>
                    <CardTitle>Card {id}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic velit harum eos amet praesentium odit aliquam accusamus esse. Est?</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer {id}</p>
                </CardFooter>
                </Card>
            ))}
            </div>
    </>
  )
}

export default App

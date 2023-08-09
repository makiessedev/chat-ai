'use client'

import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleSubmit, handleInputChange } = useChat({
    api: '/api/chat',
  })

  return (
    <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
          {
            messages.map(message => {
              return (
                <div key={message.id} className="mt-2 flex gap-3 text-slate-600 text-sm">
                  {
                    message.role === 'user' && (
                      <Avatar>
                        <AvatarFallback>MM</AvatarFallback>
                        <AvatarImage src='https://github.com/makiessedev.png' />
                    </Avatar>
                    )
                  }
                  {
                    message.role === 'assistant' && (
                      <Avatar>
                        <AvatarFallback>AI</AvatarFallback>
                        <AvatarImage src='https://github.com/rocketseat.png' />
                    </Avatar>
                    )
                  }
                  <p className="leading-relaxed">
                    <span className="block text-slate-800">
                      {
                        message.role === 'user' && 'EU:'
                      }
                      {
                        message.role === 'assistant' && 'AI:'
                      }
                    </span>
                    {message.content}
                  </p>
                </div>
              )
            })
          }
          </ScrollArea>
        </CardContent>
        
        <CardFooter >
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}
              className="rounded"
            />
            <Button type="submit">
              Send
            </Button>
          </form>
        </CardFooter>
    </Card>
  )
}
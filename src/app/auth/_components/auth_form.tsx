'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false })

      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link to login'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error ocurred. Please try again.'
      })
    }
  })

  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Magic Link Authentication</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below and we'll send you a magic link to sign in.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input className="w-full" id="email" placeholder="Enter your email" type="email" {...form.register('email')} />
          </div>
          <Button className="w-full" type="submit">
            Send Magic Link
          </Button>
        </form>
      </div>
    </main>
  )
}
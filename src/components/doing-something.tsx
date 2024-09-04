'use client'

import { useState, useEffect, MouseEvent } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, DollarSign, Brain, Headphones, Footprints, FlaskRound, Code, BoxIcon, Trophy, Dna, Users, Smile, Mail, Cake, Search, Wand2 } from "lucide-react"

interface Project {
  id: number;
  title: string;
  desc: string;
  icon: JSX.Element;
}

const projects: Project[] = [
  { id: 1, title: "DigibizIndia💡", desc: "Helps businesses digitize by creating an online presence for their products or services, without being an e-commerce platform. It simply provides a link to showcase products or services online.", icon: <Lightbulb className="h-4 w-4" /> },
  { id: 2, title: "EarnRupee 💰", desc: "Referral-based earning platform where users can earn money by referring others.", icon: <DollarSign className="h-4 w-4" /> },
  { id: 3, title: "GetReady 🤔💭", desc: "App for students, focusing on helping them become experts in their studies by solving objective and subjective questions based on their school syllabus.", icon: <Brain className="h-4 w-4" /> },
  { id: 4, title: "Make ur playlist 🎧ྀི", desc: "Allows users to create and organize their playlists, specifically using YouTube videos.", icon: <Headphones className="h-4 w-4" /> },
  { id: 5, title: "Tracker 🐾", desc: "Helps users track their daily activities and monitor their productivity.", icon: <Footprints className="h-4 w-4" /> },
  { id: 6, title: "Disease 🤧", desc: "Database that provides a list of diseases, their symptoms, and recommended medicines.", icon: <FlaskRound className="h-4 w-4" /> },
  { id: 7, title: "JS libraries </>", desc: "Listing JavaScript libraries that can be beneficial for developers working on various projects.", icon: <Code className="h-4 w-4" /> },
  { id: 8, title: "Components 🧊", desc: "Web components that developers can easily copy and paste into their projects.", icon: <BoxIcon className="h-4 w-4" /> },
  { id: 9, title: "TheFirstThing 🥇", desc: "Provides information about the first instances of various things that happened in the world.", icon: <Trophy className="h-4 w-4" /> },
  { id: 10, title: "Evolution 🧬", desc: "Platform that explains how various things have evolved over time.", icon: <Dna className="h-4 w-4" /> },
  { id: 11, title: "TheGoldenGang 🤗", desc: "Social app where users can share details about their friend groups or \"gangs.\"", icon: <Users className="h-4 w-4" /> },
  { id: 12, title: "Happiness 😊", desc: "Collection of videos curated to make users laugh and improve their mood.", icon: <Smile className="h-4 w-4" /> },
  { id: 13, title: "Letters 🔠", desc: "Tool to assist users in writing different types of letters, providing templates and examples.", icon: <Mail className="h-4 w-4" /> },
  { id: 14, title: "Birthday 🎂", desc: "Reminder app that helps users remember and track the birthdays of friends, family, or anyone important.", icon: <Cake className="h-4 w-4" /> },
  { id: 15, title: "Search Heroine 👸", desc: "Search tool focused on finding information about heroines.", icon: <Search className="h-4 w-4" /> },
  { id: 16, title: "AI Astrologer 🪄", desc: "AI-driven platform that provides astrological predictions and insights.", icon: <Wand2 className="h-4 w-4" /> },
]

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

function useDraggable(id: number, initialPos: { x: number; y: number }, onDragEnd: (id: number, position: { x: number; y: number }) => void) {
  const [position, setPosition] = useState(initialPos)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true)
    e.preventDefault()
  }

  useEffect(() => {
    const handleMouseMove: any = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - 50,
          y: e.clientY - 50,
        })
      }
    }

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false)
        onDragEnd(id, position)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [id, isDragging, position, onDragEnd])

  return { position, handleMouseDown }
}

export function DoingSomething() {
  const [positions, setPositions] = useLocalStorage<Record<number, { x: number; y: number }>>('cardPositions', {})
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleDragEnd = (id: number, position: { x: number; y: number }) => {
    setPositions((prev) => ({ ...prev, [id]: position }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <header className="flex items-center justify-between p-4 bg-white bg-opacity-10 backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-white">DoingSomeThing</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
      <main className="container mx-auto p-4">
        <div className="relative h-[calc(100vh-6rem)]">
          {projects.map((project) => (
            <DraggableCard
              key={project.id}
              project={project}
              initialPos={positions[project.id] || { x: (project.id - 1) % 4 * 300, y: Math.floor((project.id - 1) / 4) * 200 }}
              onDragEnd={handleDragEnd}
              onView={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </main>
      <Sheet>
        <SheetTrigger asChild>
          <span className="hidden">{selectedProject?.title}</span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{selectedProject?.title}</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <p>{selectedProject?.desc}</p>
            <div className="mt-4 flex justify-between items-center">
              <Badge variant="outline">Status: In Progress</Badge>
              {selectedProject?.icon}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

interface DraggableCardProps {
  project: Project;
  initialPos: { x: number; y: number };
  onDragEnd: (id: number, position: { x: number; y: number }) => void;
  onView: () => void;
}

function DraggableCard({ project, initialPos, onDragEnd, onView }: DraggableCardProps) {
  const { position, handleMouseDown } = useDraggable(project.id, initialPos, onDragEnd)

  return (
    <Card
      className="absolute w-64 cursor-move"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {project.icon}
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {project.desc.length > 100 ? `${project.desc.slice(0, 100)}...` : project.desc}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onView}>View</Button>
      </CardFooter>
    </Card>
  )
}

/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useEffect, useState } from 'react'

import { Lightbulb, DollarSign, Brain, Headphones, Footprints, FlaskRound, Code, BoxIcon, Trophy, Dna, Users, Smile, Mail, Cake, Search, Wand2, LinkIcon, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from './ui/badge';
import Link from 'next/link'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from 'next/image'


interface Project {
    id: number;
    title: string;
    desc: string;
    icon: JSX.Element;
    status: "COMPLETED" | "STARTED" | "ENHANCING" | "NOTSTARTED"
    link: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "DigibizIndia💡",
        desc: "Helps businesses digitize by creating an online presence for their products or services, without being an e-commerce platform. It simply provides a link to showcase products or services online.",
        icon: <Lightbulb className="h-4 w-4" />,
        status: "ENHANCING",
        link: "https://digibiz.doingsomethings.online/"
    },
    {
        id: 2,
        title: "EarnRupee 💰",
        desc: "Referral-based earning platform where users can earn money by referring others.",
        icon: <DollarSign className="h-4 w-4" />,
        status: "ENHANCING",
        link: "https://earnrupee.doingsomethings.online/"
    },
    {
        id: 3,
        title: "Social Media AI Manager 🤖",
        desc: "AI-powered platform for managing multiple social media accounts, automating post scheduling, and creating engaging content using artificial intelligence.",
        icon: <MessageSquare className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 4,
        title: "GetReady 🤔💭",
        desc: "App for students, focusing on helping them become experts in their studies by solving objective and subjective questions based on their school syllabus.",
        icon: <Brain className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 5,
        title: "Make ur playlist 🎧",
        desc: "Allows users to create and organize their playlists, specifically using YouTube videos.",
        icon: <Headphones className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 6,
        title: "Tracker 🐾",
        desc: "Helps users track their daily activities and monitor their productivity.",
        icon: <Footprints className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 7,
        title: "Disease 🤧",
        desc: "Database that provides a list of diseases, their symptoms, and recommended medicines.",
        icon: <FlaskRound className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 8,
        title: "JS libraries </>",
        desc: "Listing JavaScript libraries that can be beneficial for developers working on various projects.",
        icon: <Code className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 9,
        title: "Components 🧊",
        desc: "Web components that developers can easily copy and paste into their projects.",
        icon: <BoxIcon className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 10,
        title: "TheFirstThing 🥇",
        desc: "Provides information about the first instances of various things that happened in the world.",
        icon: <Trophy className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 11,
        title: "Evolution 🧬",
        desc: "Platform that explains how various things have evolved over time.",
        icon: <Dna className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 12,
        title: "TheGoldenGang 🤗",
        desc: "Social app where users can share details about their friend groups or 'gangs.'",
        icon: <Users className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 13,
        title: "Happiness 😊",
        desc: "Collection of videos curated to make users laugh and improve their mood.",
        icon: <Smile className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 14,
        title: "Letters 🔠",
        desc: "Tool to assist users in writing different types of letters, providing templates and examples.",
        icon: <Mail className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 15,
        title: "Birthday 🎂",
        desc: "Reminder app that helps users remember and track the birthdays of friends, family, or anyone important.",
        icon: <Cake className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 16,
        title: "Search Heroine 👸",
        desc: "Search tool focused on finding information about heroines.",
        icon: <Search className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
    {
        id: 17,
        title: "AI Astrologer 🪄",
        desc: "AI-driven platform that provides astrological predictions and insights.",
        icon: <Wand2 className="h-4 w-4" />,
        status: "NOTSTARTED",
        link: ""
    },
]


const statusColors = {
    COMPLETED: "bg-green-500",
    STARTED: "bg-blue-500",
    ENHANCING: "bg-yellow-500",
    NOTSTARTED: "bg-gray-500"
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDialogOpen(true)
        }, 15000)

        return () => clearTimeout(timer)
    }, [])
    const handleWhatsApp = (project: Project) => {
        const message = encodeURIComponent(`Check out this project: ${project.title} - ${project.desc}`)
        window.open(`https://wa.me/?text=${message}`, '_blank')
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950  md:flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdyYWQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwODRmZiIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDg0ZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PC9zdmc+')]" style={{ backgroundSize: '100% 100%', animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
                </div>
            </div>
            <main className="max-w-4xl container p-2  md:mx-auto md:p-4  text-white rounded-lg">
                <div className="relative h-[calc(100vh)] overflow-auto grid grid-cols-1 gap-4">
                    <motion.header
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className='z-50 sticky top-0 backdrop-blur-md mx-2 mt-4 flex items-center justify-between bg-slate-700 p-4 rounded-lg'>
                        <h2 className='text-lg font-medium animate-out'>Doing Something</h2>
                        <a href='https://www.linkedin.com/in/ajit-patil-9b600023b/' >
                            <Avatar>
                                <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQG2WdA11Ror9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715351535449?e=1730937600&v=beta&t=Hy7fRQF-2FTGdgm3UEcZQSMHdjFmdina-rSDmKaWbbA" alt="@shadcn" />
                                <AvatarFallback>A9</AvatarFallback>
                            </Avatar>
                        </a>
                    </motion.header>
                    {
                        projects.map((project) => (
                            <motion.div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className='relative mx-2 flex flex-col gap-2 bg-slate-700/80 p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-slate-600/80'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="font-semibold">{project.title}</h2>
                                <span className='absolute right-2 text-xs'>
                                    <Badge className={`${statusColors[project.status]} text-white`}>
                                        {project.status}
                                    </Badge></span>
                                <p className="text-sm text-gray-300">
                                    {project.desc.length > 100 ? `${project.desc.slice(0, 100)}...` : project.desc}
                                </p>
                                {project.status == "COMPLETED" || project.status == "ENHANCING" && <div className="mt-2 flex items-center justify-start">
                                    <Button
                                        variant="default"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            window.open(project.link, '_blank')
                                        }}
                                    >
                                        <LinkIcon className="h-4 w-4 mr-2 " />
                                    </Button>
                                </div>}
                            </motion.div>
                        ))
                    }
                </div>
            </main>
            <Sheet open={selectedProject ? true : false} onOpenChange={(v) => !v && setSelectedProject(null)}>
                <SheetContent side={"bottom"} className="">
                    <SheetHeader>
                        <SheetTitle className="">{selectedProject?.title}</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4">
                        <p className="">{selectedProject?.desc}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <Badge className={`${selectedProject ? statusColors[selectedProject.status] : ''} `}>
                                {selectedProject?.status}
                            </Badge>
                            {selectedProject?.icon}
                        </div>
                        <div className="mt-6 flex flex-col items-center gap-4">
                            <Button
                                variant="outline"
                                className="w-full bg-green-600 text-white"
                                onClick={() => selectedProject && handleWhatsApp(selectedProject)}
                            >
                                Share on WhatsApp
                            </Button>
                        </div>
                        <div className="mt-6">
                            {/* <p className="text-sm text-center">Need a domain for my project?</p> */}
                            <Button
                                variant="outline"
                                className="w-full mt-2 bg-yellow-500 text-white"
                                onClick={() => window.open(`https://wa.me/918971860300?text=Yo! Saw your project, and it’s 🔥. Let’s link up and make some moves!`, '_blank')}
                            >
                                Contact me
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <AnimatePresence>
                {isDialogOpen && (
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogContent className=" p-4 rounded-lg">
                            <DialogHeader>
                                <DialogTitle>🎉 Thank You! 🎉</DialogTitle>
                                <DialogDescription className="mt-2">
                                    🙏 Thanks for spending more than 15 seconds here. I truly appreciate your interest in my projects!
                                </DialogDescription>
                            </DialogHeader>
                            <Button
                                onClick={() => setIsDialogOpen(false)}
                                className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                            >
                                ✨ Close ✨
                            </Button>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects
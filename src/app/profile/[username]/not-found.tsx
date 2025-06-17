"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeIcon, ArrowLeftIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            {/* LARGE 404 TEXT */}
            <motion.p 
              className="text-8xl font-bold text-primary font-mono"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.p>

            {/* MESSAGE */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Usuário não encontrado</h1>
              <p className="text-muted-foreground">O usuário que você está procurando não existe.</p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
              >
                <Button 
                  variant="default" 
                  asChild
                  className="relative overflow-hidden group"
                >
                  <Link href="/">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <HomeIcon className="mr-2 size-4" />
                    Voltar para o Início
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
              >
                <Button 
                  variant="outline" 
                  asChild
                  className="relative overflow-hidden group rainbow-hover"
                >
                  <Link href="/">
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <ArrowLeftIcon className="mr-2 size-4" />
                    Página Inicial
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* RAINBOW EMOJIS */}
            <motion.div 
              className="flex justify-center gap-2 pt-4"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              {['🏳️‍🌈', '❤️', '🧡', '💛', '💚', '💙', '💜'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="text-2xl"
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
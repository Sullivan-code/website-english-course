import { currentUser } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { getUserByClerkId } from "@/actions/user.action";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { LinkIcon, MapPinIcon } from "lucide-react";

async function Sidebar() {
  const authUser = await currentUser();
  if (!authUser) return <UnAuthenticatedSidebar />;

  const user = await getUserByClerkId(authUser.id);
  if (!user) return null;

  return (
    <div className="sticky top-20">
      <Card className="bg-gradient-to-b from-indigo-900 to-purple-900 border-0 shadow-xl">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <Link
              href={`/profile/${user.username}`}
              className="flex flex-col items-center justify-center group"
            >
              <Avatar className="w-20 h-20 border-2 border-purple-400 group-hover:border-blue-300 transition-colors">
                <AvatarImage src={user.image || "/avatar.png"} />
              </Avatar>

              <div className="mt-4 space-y-1">
                <h3 className="font-semibold text-blue-200 group-hover:text-purple-200 transition-colors">
                  {user.name}
                </h3>
                <p className="text-sm text-purple-300">{user.username}</p>
              </div>
            </Link>

            {user.bio && <p className="mt-3 text-sm text-blue-100 px-2">{user.bio}</p>}

            <div className="w-full">
              <Separator className="my-4 bg-indigo-700" />
              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-blue-100">{user._count.following}</p>
                  <p className="text-xs text-purple-300">Seguindo</p>
                </div>
                <Separator orientation="vertical" className="bg-indigo-700 h-8" />
                <div>
                  <p className="font-medium text-blue-100">{user._count.followers}</p>
                  <p className="text-xs text-purple-300">Seguidores</p>
                </div>
              </div>
              <Separator className="my-4 bg-indigo-700" />
            </div>

            <div className="w-full space-y-2 text-sm">
              <div className="flex items-center text-blue-100">
                <MapPinIcon className="w-4 h-4 mr-2 text-purple-300" />
                {user.location || "Sem localização"}
              </div>
              <div className="flex items-center text-blue-100">
                <LinkIcon className="w-4 h-4 mr-2 text-purple-300 shrink-0" />
                {user.website ? (
                  <a href={`${user.website}`} className="hover:underline truncate text-blue-300 hover:text-purple-300 transition-colors" target="_blank">
                    {user.website}
                  </a>
                ) : (
                  "Nenhum Website"
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;

const UnAuthenticatedSidebar = () => (
  <div className="sticky top-20 max-w-lg mx-auto">
  <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-indigo-800 to-purple-800 border-0">
    <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF0018_0%,#FFA52C_17%,#FFFF41_33%,#008018_50%,#0000F9_66%,#86007D_83%)] opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    
    <CardHeader>
      <CardTitle className="text-center text-xl font-semibold text-blue-100">
        Bem-vindo de Volta!
      </CardTitle>
    </CardHeader>
    
    <CardContent>
      <p className="text-center text-purple-200 mb-4">
        Faça login para acessar seu perfil e conectar-se com outros.
      </p>
      
      <SignInButton mode="modal">
        <Button 
          className="w-full relative overflow-hidden transition-all hover:scale-[1.02] bg-blue-600 hover:bg-blue-700 text-white"
          variant="outline"
        >
          <span className="relative z-10">Entrar</span>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#FF0018_0%,#FFA52C_17%,#FFFF41_33%,#008018_50%,#0000F9_66%,#86007D_83%)] opacity-0 hover:opacity-30 transition-opacity duration-300" />
        </Button>
      </SignInButton>
      
      <SignUpButton mode="modal">
        <Button 
          className="w-full mt-2 relative overflow-hidden transition-all hover:scale-[1.02] bg-purple-600 hover:bg-purple-700 text-white"
          variant="default"
        >
          <span className="relative z-10">Cadastrar</span>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#FF0018_0%,#FFA52C_17%,#FFFF41_33%,#008018_50%,#0000F9_66%,#86007D_83%)] opacity-0 hover:opacity-30 transition-opacity duration-300" />
        </Button>
      </SignUpButton>
    </CardContent>
  </Card>
</div>
);
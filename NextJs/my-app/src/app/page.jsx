'use client';
import Headers from '@/components/headers';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useState } from 'react';

export default function page(){
  function Submit(){
    console.log("Submittted");
  }
  const[count,setCount] = useState("This is String");

  function submit(){
        setCount("i changed the string");
        console.log("button pressed");
    }

  return(
    <>
 <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    <Headers/>
         {count} <br/>
        <Button onClick={submit}>click me</Button>
       </>

  )
}


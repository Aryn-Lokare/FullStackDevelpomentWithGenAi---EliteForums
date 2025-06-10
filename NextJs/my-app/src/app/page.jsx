'use client';
import Headers from '@/components/headers';
import { Button } from '@/components/ui/button';
import { NavigationMenu } from '@/components/ui/navigation-menu';
export default function page(){
  function Submit(){
    console.log("Submittted");
  }
  return(
    <>
    <Headers/>
    <h1>NextJs</h1>
    <Button onClick={Submit}>Click Me </Button>
    </>
  )
}





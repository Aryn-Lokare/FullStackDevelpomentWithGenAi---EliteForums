'use client';
import React from 'react'
import {useState} from 'react'
import { Button } from '@/components/ui/Button'

 function Count(){
    const [age,setAge] = useState(42)
    function handleAge(){
        setAge(age+1);
    }
  return (
    <div>
    {age}
      <Button onclick={handleAge}>Click Me </Button>
    </div>
  )
}
export default Count


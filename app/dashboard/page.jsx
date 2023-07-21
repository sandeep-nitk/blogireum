
"use client"
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import useSWR from 'swr'

import { useSession } from "next-auth/react"
const login = () => {
        // const[ data, setData] = useState([]);
        // const[ error, setError] = useState(false);
        // const[ isLoading, setIsLoading] = useState(false);

        // useEffect(()=>{

        //   async function getData() {
        //     const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        //       cache: "no-store",
        //     });
          
        //     if (!res.ok) {
        //       setError(true)
              
        //     }
    
        //   const data = await res.json();
        //     setData(data);
        //     setIsLoading(false)
        //   }
        //   getData();
        // },[])

            const session = useSession();
console.log(session);

        const fetcher = (...args) => fetch(...args).then(res => res.json())

          const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
 
          if (error) return <div>failed to load</div>
          if (isLoading) return <div>loading...</div>
console.log(data);

  return (
    <div className='styles.container'>Dashboard</div>
  )
}

export default login
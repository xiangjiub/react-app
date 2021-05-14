import React, { useState, useEffect } from 'react'

export default function Example(){
    const [count,setcount] = useState(0)
    useEffect(() => {
        document.title=`you clike ${count} ci`
    })
    return(
        <>
        <div>当前值:{count}</div>
        <button onClick={() =>setcount(count+1)}>点我呀</button>
        </>
    )
}
import { NextRequest, NextResponse } from 'next/server'

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
const urlPattern=/^https?:\/\/[\w.-]+(?:\.[\w\.-]+)+(?:[\/?#].*)?$/i
const phonePattern=/^[+\d][\d\s()-]{7,20}$/

export async function POST(req:NextRequest){
 try{
  const body=await req.json()
  const {name,email,phone,business,website,service,message,company}=body
  if(company)return NextResponse.json({success:true})
  if(!name||!business||!email||!phone)return NextResponse.json({error:'Please complete all required fields.'},{status:400})
  if(!emailPattern.test(email))return NextResponse.json({error:'Enter a valid email address.'},{status:400})
  if(!phonePattern.test(phone))return NextResponse.json({error:'Enter a valid phone or WhatsApp number.'},{status:400})
  if(website&&!urlPattern.test(website))return NextResponse.json({error:'Enter a complete website URL beginning with http:// or https://.'},{status:400})
  const scriptUrl=process.env.GOOGLE_SCRIPT_URL
  if(!scriptUrl){console.error('GOOGLE_SCRIPT_URL not set');return NextResponse.json({error:'The review service is temporarily unavailable.'},{status:500})}
  const response=await fetch(scriptUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,phone,business,website,service,message})})
  if(!response.ok)throw new Error(`Script responded with ${response.status}`)
  return NextResponse.json({success:true,message:'Your Digital Presence Review request has been received.'})
 }catch(err){console.error('Contact form error:',err);return NextResponse.json({error:'Something went wrong. Please try again.'},{status:500})}
}

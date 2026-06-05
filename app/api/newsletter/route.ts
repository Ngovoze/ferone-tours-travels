import { NextResponse } from "next/server";

export async function POST(request: Request){
  const formData = await request.formData();
  const email = String(formData.get('email') || '');
  if(!email.includes('@')) return NextResponse.json({ ok:false, message:'Valid email required' }, { status:400 });
  console.log('Ferone newsletter', email);
  return NextResponse.json({ ok:true });
}

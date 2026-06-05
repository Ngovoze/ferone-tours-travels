import { NextResponse } from "next/server";

export async function POST(request: Request){
  const formData = await request.formData();
  const name = String(formData.get('name') || '');
  const phone = String(formData.get('phone') || '');
  const destination = String(formData.get('destination') || '');
  if(!name || !phone || !destination) return NextResponse.json({ ok:false, message:'Missing required fields' }, { status:400 });
  console.log('Ferone inquiry', Object.fromEntries(formData.entries()));
  return NextResponse.redirect(new URL('/contact?submitted=true', request.url));
}

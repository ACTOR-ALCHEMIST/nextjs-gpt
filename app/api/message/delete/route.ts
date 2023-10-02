import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id")
    if (!id) {
        return NextResponse.json({ code: -1 })
        // 返回错误
    }
    await prisma.message.delete({
        where: {
            id
        }
    })
    return NextResponse.json({ code: 0 })//成功后返回0
}
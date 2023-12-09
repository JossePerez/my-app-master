import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import { GetServerSidePropsContext } from "next";

export async function GET(request: any, { params }: GetServerSidePropsContext) {
  try {
    const student = await prisma.student.findUnique({
      where: {
        id: Number(params?.id),
      },
    });

    if (!student) {
      return new NextResponse("El usuario no existe", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(student), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al obtener el estudiante:", error);
    return new NextResponse("Error interno del servidor", { status: 500 });
  }
}

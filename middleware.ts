import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware para proteger as rotas
export async function middleware(request: NextRequest) {
    const token = request.cookies.get('session-token')?.value; // Ajuste o nome do cookie se necessário
    // console.log("Token no middleware:", token); // Adicione este log

    const loginUrl = new URL("/signin", request.url);
    const dashboardUrl = new URL("/dashboard", request.url);

    // Verifica se o usuário não está autenticado e tenta acessar o dashboard
    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(loginUrl);
    }

    // Redireciona usuários autenticados para o dashboard se tentarem acessar a página de login
    if (token && request.nextUrl.pathname === '/signin') {
        return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
}

// Aplicar middleware apenas a caminhos específicos
export const config = {
    matcher: ["/signin", "/dashboard/:path*"],
};
export function NotFound() {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-6">
            <h1 className="text-6xl font-bold text-gray-100">404 - Not Found</h1>
            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-500 transition ease-linear">
                Voltar para o inicio
            </a>
        </div>
    )
}
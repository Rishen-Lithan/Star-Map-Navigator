import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article class="h-screen bg-blue-950 flex justify-center items-center">
        <div class="w-64 p-10 bg-white rounded-lg text-center">
            <h1 class="text-3xl font-bold mb-4">Oops!</h1>
            <p class="text-xl mb-4">Page Not Found</p>
            <div>
                <a href="/" class="text-blue-500 hover:underline">Visit Our Login Page</a>
            </div>
        </div>
    </article>
    )
}

export default Missing
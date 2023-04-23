'use server'

export async function generateMetadata({ params }) {
    return {
        title: 'Lista de notícia'
    };
}

export default async function Page() {
    return (
        <>
            <h2>Lista de notícia</h2>
        </>
    ) 
}
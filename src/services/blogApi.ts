const API_URL = "https://blog-backend-5key.onrender.com/api/posts";

export const fetchBlogPosts = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
    }
    const data = await response.json();
    return data;
}

export const fetchBlogPostById = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch blog post");
    }
    const data = await response.json();
    return data;
}
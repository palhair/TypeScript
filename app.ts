enum StatusCode {
    PUBL = 'published',
    DRAFT = 'draft',
    DEL = 'deleted'
}

async function getFaqs(req:{
    topicId: number;
    status: StatusCode;
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: StatusCode;
    
    }[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
    
}
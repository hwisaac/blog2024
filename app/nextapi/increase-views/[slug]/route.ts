import { API_URL } from '@/lib/urls';
import axios from 'axios';
// app/nextapi/increase-views/[slug]
export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params; // URL 경로에서 slug 추출

    if (!slug) {
      return new Response(
        JSON.stringify({ success: false, message: 'Slug is required' }),
        { status: 400 }
      );
    }

    // Django API로 조회수 증가 요청
    const result = await axios.post(
      `${API_URL}/api/posts/increase-views/${slug}/`
    );

    return new Response(
      JSON.stringify({
        success: true,
        data: result.data,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error increasing views:', error);

    return new Response(
      JSON.stringify({ success: false, message: 'Failed to increase views' }),
      { status: 500 }
    );
  }
}

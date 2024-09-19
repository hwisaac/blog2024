'use client';
import { API_URL } from '@/lib/urls';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

type Props = {
  slug: string;
};

export default function IncreaseViewCount({ slug }: Props) {
  useEffect(() => {
    const cookieName = `viewed_${slug}`;

    // 쿠키가 없으면 조회수 증가
    if (!Cookies.get(cookieName)) {
      const increaseViewCount = async () => {
        try {
          await fetch(`/nextapi/increase-views/${slug}/`, {
            method: 'POST',
          }).then(async (res) => {
            console.log(await res.json());
            console.log(`${slug} 조회수 증가 성공`);
          });

          // 조회수가 증가한 후 쿠키 설정 (예: 1일 동안 중복 방지)
          Cookies.set(cookieName, 'true', { expires: 1 });
        } catch (error) {
          console.error('조회수 증가 실패:', error);
        }
      };

      increaseViewCount();
    }
  }, [slug]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
}

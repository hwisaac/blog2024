import Aside from '@/components/aside/Aside';
import Pagination from '@/components/main/Pagination';
import Posts from '@/components/main/Posts';
import { API_URL } from '@/lib/urls';
import Image from 'next/image';

export interface Post {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  summary: string;
  views: number;
  thumbnail: null | string;
  tags: string[];
}
export interface PostsResponse {
  posts: Post[];
  total_items: number;
  current_page: number;
  total_pages: number;
}

const dummyPosts = {
  posts: [
    {
      id: 3,
      created_at: '2024-09-16T00:14:23.489759+09:00',
      updated_at: '2024-09-17T21:44:46.422832+09:00',
      title: 'How to Stake Solayer $SOL: A Comprehensive Guide',
      slug: 'how-to-stake-solayer',
      summary:
        'Solayer $SOL staking has become an increasingly popular way for cryptocurrency holders to earn passive income. In this guide, we will walk you through the process of staking Solayer $SOL step by step, using DappRadar, a leading platform for decentralized applications. Let’s dive in!',
      views: 0,
      thumbnail: null,
      tags: [1],
    },
    {
      id: 4,
      created_at: '2024-09-17T21:32:10.095689+09:00',
      updated_at: '2024-09-17T21:32:10.095721+09:00',
      title: 'How to Stake Renzo Protocol $ezRez: A Comprehensive Guide',
      slug: 'how-to-stake-renzo',
      summary: '',
      views: 0,
      thumbnail: null,
      tags: [2, 3, 4],
    },
    {
      id: 5,
      created_at: '2024-09-17T21:33:20.926497+09:00',
      updated_at: '2024-09-17T21:33:20.926527+09:00',
      title: 'OPYN 에어드랍하기',
      slug: 'OPYN_airdrop',
      summary:
        'Opyn은 영구 옵션 프로토콜을 구축하는 곳으로 지금처럼 ETH 가격에 큰 변화 없이 횡보할 때 예치해두면 가장 효율적인 프로젝트입니다. [출처] 코인 에어드랍을 노리고 시드 분배 해두기 좋은 프로젝트|작성자 로우나',
      views: 0,
      thumbnail: null,
      tags: [5],
    },
    {
      id: 6,
      created_at: '2024-09-17T21:34:06.165212+09:00',
      updated_at: '2024-09-17T21:34:06.165241+09:00',
      title: 'swaap finance airdrop',
      slug: 'swaap-finance',
      summary: 'Defi 네이티브 마켓 메이커를 희망하는 swaap finance입니다.',
      views: 0,
      thumbnail: null,
      tags: [5, 6],
    },
    {
      id: 7,
      created_at: '2024-09-17T21:35:17.420024+09:00',
      updated_at: '2024-09-17T21:35:17.420043+09:00',
      title:
        '테조스 도메인 2년 존버 끝에 TED 토큰 에어드랍 및 TrustSwap Launchpad 디테일',
      slug: 'dmain-ted',
      summary:
        '약 2년 전 지금은 고인이 되어버린 루나의 도메인 서비스 TNS가 자체 토큰 출시와 함께 홀더들을 대상으로 에어드랍을 진행했었습니다.',
      views: 0,
      thumbnail: null,
      tags: [5],
    },
    {
      id: 8,
      created_at: '2024-09-17T21:36:15.447193+09:00',
      updated_at: '2024-09-17T21:36:15.447206+09:00',
      title:
        'Batonex 거래소의 BTX 코인으로 2주 만에 8배, 대략 2껄 복사한 썰 [출처] Batonex 거래소의 BTX 코인으로 2주 만에 8배, 대략 2껄 복사한 썰',
      slug: 'batonex_exchange',
      summary:
        'Batonex 거래소의 BTX 코인으로 2주 만에 8배, 대략 2껄 복사한 썰 [출처] Batonex 거래소의 BTX 코인으로 2주 만에 8배, 대략 2껄 복사한 썰',
      views: 0,
      thumbnail: null,
      tags: [5],
    },
  ],
  total_items: 8,
  current_page: 1,
  total_pages: 2,
};
export default async function Home({ searchParams: { page } }: any) {
  const _onPageChange = (page: number) => {};
  console.log(API_URL);
  const result: PostsResponse = await fetch(
    `${API_URL}/api/posts/?page=${page ?? 1}`,
    {
      cache: 'no-cache',
    }
  ).then((res) => res.json());

  return (
    <div className='flex w-full mx-auto max-w-7xl'>
      <main className='w-full bg-white flex flex-col rounded-lg shadow-lg overflow-hidden pt-6 pb-12 gap-10'>
        <Posts posts={result.posts} />

        <Pagination
          currentPage={result.current_page || 1}
          totalPages={result.total_pages}
          onPageChange={_onPageChange}
        />
      </main>
      <Aside />
    </div>
  );
}

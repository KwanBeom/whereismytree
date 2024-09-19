# 어쩔트리

> 크리스마스 트리의 위치를 공유해보세요! 👉 https://whereismytree.me/

## 📖 프로젝트 소개
크리스마스 트리의 위치를 등록해 전국의 유저들에게 공유하고, 리뷰를 남겨 생생한 후기를 사용자들과 나누는 커뮤니티 기반의 서비스입니다. 

## 목차
1. [시작하기](#시작하기)
2. [주요 기능 소개](#주요-기능-소개)
3. [사용 기술](#사용-기술)
4. [폴더 구조](#폴더-구조)

## 시작하기
```
git clone https://github.com/whereismytree/frontend.git
```

```
npm install
```

### Dev Mode
```
npm start
```

### Production
```
npm run build
```

## 주요 기능 소개

### 크리스마스 트리 등록
- 위치를 검색하거나 현재 위치로 설정합니다.
- 지도를 기반으로 트리를 등록할 수 있습니다.
- 트리의 상세정보를 기입할 수 있습니다.

  ![위치 등록](https://github.com/user-attachments/assets/71cd6dc5-8eb3-402b-9bf0-e911ce976990)
  ![트리등록](https://github.com/user-attachments/assets/fb52b2ad-334c-43dc-99a8-f71c8b6a3f32)

### 트리 리뷰 등록
- 사진과 함께 트리에 대한 간단한 리뷰를 남길 수 있습니다.

  ![후기 등록](https://github.com/user-attachments/assets/ed53c627-5ec6-47e5-9826-f2507fe224be)

### 트리 저장
- 등록된 트리를 저장하고 저장해둔 트리를 간편하게 확인할 수 있습니다.

  ![트리 저장](https://github.com/user-attachments/assets/954715c3-b38d-4428-99c2-698a042525a6)


### 크리스마스 트리 찾기
- 지도에서 등록된 크리스마스 트리를 찾을 수 있습니다.
- 위치 및 트리 이름으로 검색해 트리를 찾을 수 있습니다.

  ![트리검색](https://github.com/user-attachments/assets/0bea4bf7-0de2-474c-a601-524f66323472)





 


## 사용 기술

-   **Language**: TypeScript
-   **Library & Framework**  : React, TanStack-Query
-  **Style**: Styled-components
-  **Deploy**: AWS S3 + CloudFront
- **DevOps**: Github Actions


## 폴더 구조

```
📦src  
 ┣ 📂assets  
 ┣ 📂components  
 ┃ ┗ 📂common  
 ┣ 📂constants  
 ┣ 📂error  
 ┣ 📂hooks  
 ┣ 📂pages  
 ┃ ┣ 📂ErrorPage  
 ┃ ┣ 📂LandingPage  
 ┃ ┣ 📂LoginPage  
 ┃ ┣ 📂MyPage  
 ┃ ┣ 📂MyReviewPage  
 ┃ ┣ 📂MyTreePage  
 ┃ ┣ 📂ReviewDetailPage  
 ┃ ┣ 📂ReviewRegistAndEditPage  
 ┃ ┣ 📂SavedTreePage  
 ┃ ┣ 📂SearchPage  
 ┃ ┣ 📂TreeInfoPage  
 ┃ ┗ 📂TreeRegistPage  
 ┣ 📂routes  
 ┣ 📂store  
 ┣ 📂style  
 ┣ 📂types  
 ┣ 📂utils  
 ┣ App.tsx  
 ┣ index.css  
 ┗ index.tsx  
 ```

## 팀원

- 유재영([zxxng](https://github.com/zxxng))
-  최범관([KwanBeom](https://github.com/KwanBeom))



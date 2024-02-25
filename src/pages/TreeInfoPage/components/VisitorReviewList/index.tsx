import React from 'react';
import Tag from 'components/common/tag';
import TAG, { TagId } from 'constants/tag';
import useApiQuery from 'hooks/useApiQuery';
import { IReviewList, ITreeItem } from 'types/apiResponse';
import { useNavigate } from 'react-router-dom';
import * as S from '../style';

interface IProps {
  treeInfo: ITreeItem;
}

const VisitorReviewList = ({ treeInfo }: IProps) => {
  const id = 2;
  const { data, isError, error } = useApiQuery<IReviewList>(`v1/reviews?treeId=${id}`);
  const navigate = useNavigate();

  if (isError) {
    console.error(error);
    // TODO: 통신 오류시 에러페이지 이동 ?
    // navigate('/error');
    return null;
  }

  const findTagId = (comment: string): TagId => {
    const tag = TAG.find((tag) => tag.comment === comment);
    return tag!.id;
  };

  const handleReview = () => {
    navigate(`/review/${id}`, {
      state: { treeName: treeInfo.name, location: treeInfo.roadAddress },
    });
  };

  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.SubTitle>방문자 후기</S.SubTitle>
        <S.Count>{data?.totalReviews}</S.Count>
      </S.TitleContainer>
      <S.ReviewList>
        {data?.totalReviews !== 0 ? (
          data?.reviews.map((e) => {
            return (
              <S.Review key={e.reviewId} onClick={handleReview}>
                <S.ReviewCard hasPhotoReview={!!e.reviewImageUrl}>
                  <S.Profile>
                    <S.ProfileImg src={e.profileImageUrl} />
                    <S.Nickname>
                      {e.nickname}
                      <S.PostedDate>{e.createdAt}</S.PostedDate>
                    </S.Nickname>
                  </S.Profile>
                  <S.TextReview>{e.content}</S.TextReview>
                  <S.Tags>
                    {e.tags.length && <Tag id={findTagId(e.tags[0])} />}
                    {e.tags.length > 1 && <S.TagCount>+ {e.tags.length - 1}</S.TagCount>}
                  </S.Tags>
                  {e.reviewImageUrl && <S.PhotoReview src={e.reviewImageUrl} />}
                </S.ReviewCard>
              </S.Review>
            );
          })
        ) : (
          <S.DetailItem style={{ color: ' #878787' }}>후기를 작성해주세요.</S.DetailItem>
        )}
      </S.ReviewList>
      {data?.totalReviews && data.totalReviews > 3 ? (
        <S.ReviewMoreButton>더보기</S.ReviewMoreButton>
      ) : null}
    </S.Wrapper>
  );
};

export default VisitorReviewList;

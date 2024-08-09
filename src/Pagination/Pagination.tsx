import {
  PaginationIcon,
  PaginationIconDisabled,
  PaginationItems,
  PaginationItemsActive,
  PaginationItemsThreeDot,
} from './Pagination.styles';
import React, { useState } from 'react';
import Flex from '../Flex/Flex';
import { PaginationTypes } from './Pagination.types';
import Icon from '../Icon/Icon';

const PaginationComponent: React.FC<PaginationTypes> = ({
  totalPage = 0,
  activePage = 1,
  onChange,
}) => {
  const [pagination, setPagination] = useState<PaginationTypes>({
    activePage: 1,
  });
  const onNext = () => {
    setPagination((props) => ({
      ...props,
      // @ts-ignore
      activePage: props.activePage + 1,
    }));
    // @ts-ignore
    onChange && onChange(pagination.activePage);
  };
  const onPrev = () => {
    setPagination((props) => ({
      ...props,
      // @ts-ignore
      activePage: props.activePage - 1,
    }));
    // @ts-ignore
    onChange && onChange(pagination.activePage);
  };

  const onClickPage = (val: any) => {
    setPagination((props) => ({
      ...props,
      activePage: val,
    }));
    onChange && onChange(val);
  };
  return (
    <Flex>
      {
        //@ts-ignore
        pagination.activePage <= 1 ? (
          <PaginationIconDisabled>
            <Icon
              color="#E0E0E0"
              name="ic-arrow"
              size={12}
              style={{ transform: 'rotateY(180deg)', marginTop: '2px' }}
            ></Icon>
          </PaginationIconDisabled>
        ) : (
          <PaginationIcon
            onClick={() => {
              onPrev();
            }}
          >
            <Icon
              color="#2671D9"
              name="ic-arrow"
              size={12}
              style={{ transform: 'rotateY(180deg)', marginTop: '2px' }}
            ></Icon>
          </PaginationIcon>
        )
      }
      {totalPage > 0 ? (
        totalPage <= 7 ? (
          Array.from({ length: totalPage }, (_, index) => index + 1).map(
            (val) =>
              val === pagination.activePage ? (
                <PaginationItemsActive key={val}>{val}</PaginationItemsActive>
              ) : (
                <PaginationItems
                  key={val}
                  onClick={() => {
                    onClickPage(val);
                  }}
                >
                  {val}
                </PaginationItems>
              ),
          )
        ) : totalPage === 8 ? (
          //@ts-ignore
          pagination.activePage <= 4 ? (
            <>
              {Array.from({ length: 5 }, (_, index) => index + 1).map((val) =>
                pagination.activePage === val ? (
                  <PaginationItemsActive key={val}>{val}</PaginationItemsActive>
                ) : (
                  <PaginationItems
                    key={val}
                    onClick={() => {
                      onClickPage(val);
                    }}
                  >
                    {val}
                  </PaginationItems>
                ),
              )}
              <PaginationItemsThreeDot>...</PaginationItemsThreeDot>
              <PaginationItems
                onClick={() => {
                  onClickPage(totalPage);
                }}
              >
                {totalPage}
              </PaginationItems>
            </>
          ) : //@ts-ignore
          pagination.activePage >= 5 ? (
            <>
              <PaginationItems
                onClick={() => {
                  onClickPage(1);
                }}
              >
                1
              </PaginationItems>
              <PaginationItemsThreeDot>...</PaginationItemsThreeDot>
              {Array.from({ length: 8 - 4 + 1 }, (_, index) => 4 + index).map(
                (val) =>
                  pagination.activePage === val ? (
                    <PaginationItemsActive key={val}>
                      {val}
                    </PaginationItemsActive>
                  ) : (
                    <PaginationItems
                      key={val}
                      onClick={() => {
                        onClickPage(val);
                      }}
                    >
                      {val}
                    </PaginationItems>
                  ),
              )}
            </>
          ) : (
            <PaginationItems
              onClick={() => {
                onClickPage(1);
              }}
            >
              1
            </PaginationItems>
          )
        ) : //@ts-ignore
        pagination.activePage <= 4 ? (
          <>
            {Array.from({ length: 5 }, (_, index) => index + 1).map((val) =>
              pagination.activePage === val ? (
                <PaginationItemsActive key={val}>{val}</PaginationItemsActive>
              ) : (
                <PaginationItems
                  key={val}
                  onClick={() => {
                    onClickPage(val);
                  }}
                >
                  {val}
                </PaginationItems>
              ),
            )}
            <PaginationItemsThreeDot>...</PaginationItemsThreeDot>
            <PaginationItems
              onClick={() => {
                onClickPage(totalPage);
              }}
            >
              {totalPage}
            </PaginationItems>
          </>
        ) : //@ts-ignore
        pagination.activePage >= totalPage - 3 ? (
          <>
            <PaginationItems
              onClick={() => {
                onClickPage(1);
              }}
            >
              1
            </PaginationItems>
            <PaginationItemsThreeDot>...</PaginationItemsThreeDot>
            {Array.from(
              { length: totalPage - (totalPage - 4) + 1 },
              (_, index) => totalPage - 4 + index,
            ).map((val) =>
              pagination.activePage === val ? (
                <PaginationItemsActive key={val}>{val}</PaginationItemsActive>
              ) : (
                <PaginationItems
                  key={val}
                  onClick={() => {
                    onClickPage(val);
                  }}
                >
                  {val}
                </PaginationItems>
              ),
            )}
          </>
        ) : (
          <>
            <PaginationItems
              onClick={() => {
                onClickPage(1);
              }}
            >
              1
            </PaginationItems>
            <PaginationItemsThreeDot>...</PaginationItemsThreeDot>

            <PaginationItems
              onClick={() => {
                onClickPage(
                  pagination.activePage ? pagination.activePage - 1 : 1,
                );
              }}
            >
              {
                //@ts-ignore
                pagination.activePage - 1
              }
            </PaginationItems>
            <PaginationItemsActive>
              {pagination.activePage}
            </PaginationItemsActive>
            <PaginationItems
              onClick={() => {
                onClickPage(
                  pagination.activePage ? pagination.activePage + 1 : 1,
                );
              }}
            >
              {
                //@ts-ignore
                pagination.activePage + 1
              }
            </PaginationItems>
            <PaginationItemsThreeDot>...</PaginationItemsThreeDot>
            <PaginationItems
              onClick={() => {
                onClickPage(totalPage);
              }}
            >
              {totalPage}
            </PaginationItems>
          </>
        )
      ) : //@ts-ignore
      pagination.activePage <= 4 ? (
        <>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((val) =>
            pagination.activePage === val ? (
              <PaginationItemsActive key={val}>{val}</PaginationItemsActive>
            ) : (
              <PaginationItems
                key={val}
                onClick={() => {
                  onClickPage(val);
                }}
              >
                {val}
              </PaginationItems>
            ),
          )}
          <PaginationItemsThreeDot>...</PaginationItemsThreeDot>
          <PaginationItems
            onClick={() => {
              onClickPage(totalPage);
            }}
          >
            {totalPage}
          </PaginationItems>
        </>
      ) : //@ts-ignore
      pagination.activePage >= 5 ? (
        <>
          <PaginationItems
            onClick={() => {
              onClickPage(1);
            }}
          >
            1
          </PaginationItems>
          <PaginationItemsThreeDot>...</PaginationItemsThreeDot>
          {Array.from({ length: 8 - 4 + 1 }, (_, index) => 4 + index).map(
            (val) =>
              pagination.activePage === val ? (
                <PaginationItemsActive key={val}>{val}</PaginationItemsActive>
              ) : (
                <PaginationItems
                  key={val}
                  onClick={() => {
                    onClickPage(val);
                  }}
                >
                  {val}
                </PaginationItems>
              ),
          )}
        </>
      ) : (
        <PaginationItems
          onClick={() => {
            onClickPage(1);
          }}
        >
          1
        </PaginationItems>
      )}
      {
        //@ts-ignore
        pagination.activePage >= totalPage ? (
          <PaginationIconDisabled>
            <Icon
              color="#E0E0E0"
              name="ic-arrow"
              size={12}
              style={{ marginTop: '2px' }}
            ></Icon>
          </PaginationIconDisabled>
        ) : (
          <PaginationIcon onClick={() => onNext()}>
            <Icon
              color="#2671D9"
              name="ic-arrow"
              size={12}
              style={{ marginTop: '2px' }}
            ></Icon>
          </PaginationIcon>
        )
      }
    </Flex>
  );
};

PaginationComponent.displayName = 'AmPagination';
export default PaginationComponent;

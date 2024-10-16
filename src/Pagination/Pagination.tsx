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
    onChange && onChange(pagination.activePage + 1);
  };
  const onPrev = () => {
    setPagination((props) => ({
      ...props,
      // @ts-ignore
      activePage: props.activePage - 1,
    }));
    // @ts-ignore
    onChange && onChange(pagination.activePage - 1);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.62421 3.17592C7.73669 3.28843 7.79988 3.44102 7.79988 3.60012C7.79988 3.75921 7.73669 3.9118 7.62421 4.02432L5.64841 6.00012L7.62421 7.97592C7.7335 8.08908 7.79398 8.24064 7.79261 8.39796C7.79124 8.55527 7.72814 8.70576 7.6169 8.81701C7.50565 8.92825 7.35516 8.99135 7.19785 8.99272C7.04053 8.99409 6.88897 8.93361 6.77581 8.82432L4.37581 6.42432C4.26332 6.3118 4.20013 6.15921 4.20013 6.00012C4.20013 5.84102 4.26332 5.68843 4.37581 5.57592L6.77581 3.17592C6.88832 3.06343 7.04091 3.00024 7.20001 3.00024C7.3591 3.00024 7.51169 3.06343 7.62421 3.17592Z"
                fill="#E0E0E0"
              />
            </svg>
          </PaginationIconDisabled>
        ) : (
          <PaginationIcon
            onClick={() => {
              onPrev();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.62421 3.17592C7.73669 3.28843 7.79988 3.44102 7.79988 3.60012C7.79988 3.75921 7.73669 3.9118 7.62421 4.02432L5.64841 6.00012L7.62421 7.97592C7.7335 8.08908 7.79398 8.24064 7.79261 8.39796C7.79124 8.55527 7.72814 8.70576 7.6169 8.81701C7.50565 8.92825 7.35516 8.99135 7.19785 8.99272C7.04053 8.99409 6.88897 8.93361 6.77581 8.82432L4.37581 6.42432C4.26332 6.3118 4.20013 6.15921 4.20013 6.00012C4.20013 5.84102 4.26332 5.68843 4.37581 5.57592L6.77581 3.17592C6.88832 3.06343 7.04091 3.00024 7.20001 3.00024C7.3591 3.00024 7.51169 3.06343 7.62421 3.17592Z"
                fill="#2671D9"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.37575 8.82415C4.26326 8.71163 4.20007 8.55905 4.20007 8.39995C4.20007 8.24085 4.26326 8.08827 4.37575 7.97575L6.35155 5.99995L4.37575 4.02415C4.26645 3.91099 4.20597 3.75943 4.20734 3.60211C4.20871 3.44479 4.27181 3.29431 4.38305 3.18306C4.4943 3.07182 4.64479 3.00871 4.8021 3.00735C4.95942 3.00598 5.11098 3.06646 5.22414 3.17575L7.62415 5.57575C7.73663 5.68827 7.79982 5.84085 7.79982 5.99995C7.79982 6.15905 7.73663 6.31163 7.62415 6.42415L5.22414 8.82415C5.11163 8.93663 4.95904 8.99982 4.79995 8.99982C4.64085 8.99982 4.48826 8.93663 4.37575 8.82415Z"
                fill="#E0E0E0"
              />
            </svg>
          </PaginationIconDisabled>
        ) : (
          <PaginationIcon onClick={() => onNext()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.37575 8.82415C4.26326 8.71163 4.20007 8.55905 4.20007 8.39995C4.20007 8.24085 4.26326 8.08827 4.37575 7.97575L6.35155 5.99995L4.37575 4.02415C4.26645 3.91099 4.20597 3.75943 4.20734 3.60211C4.20871 3.44479 4.27181 3.29431 4.38305 3.18306C4.4943 3.07182 4.64479 3.00871 4.8021 3.00735C4.95942 3.00598 5.11098 3.06646 5.22414 3.17575L7.62415 5.57575C7.73663 5.68827 7.79982 5.84085 7.79982 5.99995C7.79982 6.15905 7.73663 6.31163 7.62415 6.42415L5.22414 8.82415C5.11163 8.93663 4.95904 8.99982 4.79995 8.99982C4.64085 8.99982 4.48826 8.93663 4.37575 8.82415Z"
                fill="#2671D9"
              />
            </svg>
          </PaginationIcon>
        )
      }
    </Flex>
  );
};

PaginationComponent.displayName = 'AmPagination';
export default PaginationComponent;

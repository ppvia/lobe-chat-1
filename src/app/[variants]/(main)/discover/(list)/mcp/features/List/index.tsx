'use client';

import { Grid } from '@lobehub/ui';
import { Empty } from 'antd';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

import { DiscoverMcpItem } from '@/types/discover';

import Item from './Item';

interface McpListProps {
  data?: DiscoverMcpItem[];
  rows?: number;
}

const McpList = memo<McpListProps>(({ data = [], rows = 3 }) => {
  if (data.length === 0)
    return (
      <Center height={640}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </Center>
    );
  return (
    <Grid rows={rows} width={'100%'}>
      {data.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </Grid>
  );
});

export default McpList;

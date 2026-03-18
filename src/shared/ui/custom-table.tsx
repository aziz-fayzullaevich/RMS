import { Table, Group, ScrollArea, Pagination, Select } from '@mantine/core';
import type { ReactNode } from 'react';
import type { Column } from '../types/custom-table-types';
import type { ID } from '../types/uility-types';



interface CustomTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  paginationProps: {
    total: number;
    page: number;
    onChange: (page: number) => void;
  };
  sortProps?: {
    value: string;
    onChange: (value: string | null) => void;
  };
}

export function CustomTable<T extends { id: ID }>({
  data,
  columns,
  paginationProps,
  sortProps
}: CustomTableProps<T>) {
  return (
    <ScrollArea>
      {sortProps && (
        <Group justify="flex-end" mb="md">
          <Select
            label="Фильтр статуса"
            placeholder="Все"
            data={['all', 'success', 'pending', 'rejected']}
            {...sortProps}
          />
        </Group>
      )}

      <Table verticalSpacing="sm" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            {columns.map((col) => (
              <Table.Th key={String(col.key)}>{col.title}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((item) => (
            <Table.Tr key={item.id}>
              {columns.map((col) => (
                <Table.Td key={String(col.key)}>
                  {col.render ? col.render(item) : (item[col.key as keyof T] as ReactNode)}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Group justify="center" mt="xl">
        <Pagination {...paginationProps} color="primary" />
      </Group>
    </ScrollArea>
  );
};
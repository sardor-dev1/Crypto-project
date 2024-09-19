import { Stack } from '@mui/material';
import React from 'react'
import Skeleton from "@mui/material/Skeleton";

export default function index() {
  return (
    <div>
      <Stack className="flex py-5 items-center justify-center" spacing={2}>
        <Skeleton variant="rectangular" width={300} height={40} />
      </Stack>
    </div>
  );
}

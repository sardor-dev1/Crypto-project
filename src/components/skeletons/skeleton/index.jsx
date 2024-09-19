import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const SkeletonLoader = () => {
  return (
    <section className="w-full">
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h Change</TableCell>
              <TableCell>Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render Skeletons for 10 rows */}
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    {/* Circular Skeleton for the image */}
                    <Skeleton variant="circular" width={50} height={50} />
                    <div className="flex flex-col gap-1">
                      {/* Skeleton for the coin symbol and name */}
                      <Skeleton width={60} height={30} />
                      <Skeleton width={80} height={20} />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {/* Skeleton for price */}
                  <Skeleton width={100} height={30} />
                </TableCell>
                <TableCell>
                  {/* Skeleton for 24h change */}
                  <Skeleton width={50} height={30} />
                </TableCell>
                <TableCell>
                  {/* Skeleton for market cap */}
                  <Skeleton width={120} height={30} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Skeleton */}
        
      </div>
    </section>
  );
};

export default SkeletonLoader;


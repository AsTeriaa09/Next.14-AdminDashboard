"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.button}
          // disabled={!hasPrev}
          // onClick={() => handleChangePage("prev")}
        >
          Previous
        </button>
        <button
          className={styles.button}
          // disabled={!hasNext}
          // onClick={() => handleChangePage("next")}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;

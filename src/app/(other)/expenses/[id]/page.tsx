"use client";

import { fetchTransaction } from "@/actions/fetch-transaction";
import { Skeleton } from "@/components/ui/skeleton";
import { Transaction } from "@/types/transaction";
import React, { useEffect, useState } from "react"

interface Props {
  params: {
    id: string;
  }
}

const SingleTransactionPage: React.FC<Props> = ({ params }) => {
  const { id } = params;

  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const transaction = await fetchTransaction(id);
      setTransaction(transaction);
    };

    fetchData();
  }, [id]);

  if (!transaction) {
    return <Skeleton />
  }

  return (
    <div>{transaction.id}</div>
  )
}

export default SingleTransactionPage;

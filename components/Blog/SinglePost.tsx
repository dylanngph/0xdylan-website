"use client";

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Skeleton,
  Box,
  VStack,
  Text
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api/works";
import Image from "next/image";


export const SinglePost = ({ id }: { id?: string }) => {

    const { data: posts, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: () => getPosts(),
        });

    const [singlePost] = posts ? posts?.data.filter((item: any) => item.id == id) : undefined;

    console.log(singlePost)
    

  return (
    <Box mt={8}>
        <VStack w='100%' align='start'>
            <Image
                alt='featured image'
                src={singlePost ? singlePost.attributes.featuredImage : "https://placehold.co/400x200"}
                width={400}
                height={200}
            />
            <Text fontWeight={700} fontSize={32}>
                {singlePost ? singlePost.attributes.title : <Skeleton w='80px' h='20px' />}
            </Text>
        </VStack>
    </Box>
  );
};

export const SinglePostBreadCrumb = ({ id }: { id?: string }) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Post: {id ? id : <Skeleton w='80px' h='20px' />}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ImagesViewer from "@/components/product/images-viewer";
import Info from "@/components/product/info";
import { executeGraphQL } from "@/lib/graphql-client";
import { ProductDetailsDocument } from "@/gql/graphql";
import { redirect } from "next/navigation";

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { variant?: string };
}) {
  const { product } = await executeGraphQL(ProductDetailsDocument, {
    variables: {
      slug: decodeURIComponent(params.slug),
    },
    revalidate: 60,
  });
  const variants = product?.variants;
  const selectedVariantID = searchParams.variant;

  if (!product || !variants?.length) redirect("/shop");
  if (!selectedVariantID)
    redirect(`/product/${params.slug}?variant=${variants[0].id}`);

  const selectedVariant = variants?.find(({ id }) => id === selectedVariantID);
  if (!selectedVariant) redirect("/shop");

  const description = JSON.parse(product?.description || "")
    .blocks.map((b: any) => b.data?.text)
    .toString();

  return (
    <div className="bg-gray-50 pt-36 px-24">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary font-semibold">
              Product
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <ImagesViewer images={selectedVariant?.media || []} />
        <Info slug={params.slug} product={product} variant={selectedVariant} />
        <div className="my-4 space-y-2">
          <p className="text-2xl font-semibold text-gray-800">
            Product Description
          </p>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
    </div>
  );
}

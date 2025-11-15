import { Skeleton } from '@/components/ui/skeleton';

const PostSkeleton = () => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-elegant">
      <Skeleton className="h-56 w-full rounded-none" />
      <div className="p-6">
        <Skeleton className="h-4 w-24 mb-3" />
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
};

export default PostSkeleton;

import LoadingSpinner from "@/components/DashboardComponents/Loadingspinner";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex justify-center items-center">
            <LoadingSpinner/>
        </div>
    )
}
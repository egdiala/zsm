import { IconCaar } from "@/components/icons"
import { cn } from "@/libs/cn"

export const VehiclesOverviewPage = () => {
    const topCards = [
        { label: "Total vehicles", value: 5045, iconColor: "text-green", iconBgColor: "bg-green/10", bgColor: "bg-light-green/80" },
        { label: "Active vehicles", value: 5948, iconColor: "text-pri", iconBgColor: "bg-pri/10", bgColor: "bg-blue-4" },
        { label: "Inactive vehicles", value: 4152, iconColor: "text-semantics-red", iconBgColor: "bg-semantics-red/10", bgColor: "bg-semantics-red-light" },
    ]
    const bottomCards = [
        { label: "Online vehicles", value: 5045, iconColor: "text-green", iconBgColor: "bg-green/10", bgColor: "bg-light-green/80" },
        { label: "Offline vehicles", value: 5948, iconColor: "text-semantics-amber", iconBgColor: "bg-semantics-amber/10", bgColor: "bg-semantics-amber-light" },
        { label: "Suspended vehicles", value: 4152, iconColor: "text-semantics-red", iconBgColor: "bg-semantics-red/10", bgColor: "bg-semantics-red-light" },
        { label: "On rest vehicles", value: 4152, iconColor: "text-semantics-amber", iconBgColor: "bg-semantics-amber/10", bgColor: "bg-semantics-amber-light" },
    ]
    return (
        <div className="flex flex-col gap-10 p-5 bg-white rounded-md">
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4">
                    {
                        topCards.map((card, index) => (
                            <div key={index} className={cn("flex items-center gap-4 px-4 py-6 rounded-md", card.bgColor)}>
                                <div className={cn("grid place-content-center w-9 h-9 rounded-md", card.iconBgColor)}>
                                    <IconCaar className={card.iconColor} />
                                </div>
                                <div className="grid gap-1">
                                    <span className="text-grey-dark-2 text-sm">{card.label}</span>
                                    <p className="text-grey-dark-1 font-medium text-base">{card.value}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {
                        bottomCards.map((card, index) => (
                            <div key={index} className={cn("flex items-center gap-4 px-4 py-6 rounded-md", card.bgColor)}>
                                <div className={cn("grid place-content-center w-9 h-9 rounded-md", card.iconBgColor)}>
                                    <IconCaar className={card.iconColor} />
                                </div>
                                <div className="grid gap-1">
                                    <span className="text-grey-dark-2 text-sm">{card.label}</span>
                                    <p className="text-grey-dark-1 font-medium text-base">{card.value}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
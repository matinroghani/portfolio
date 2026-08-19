import InfoItem from "@/components/common/InfoItem/InfoItem";
import { personalInfos } from "@/data/personalInfos";
import { PersonalInfoType } from "@/types/personalInfoType";

export default function PersonalInfos() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        justify-between
        gap-4
        rounded-xl
        border
        border-[var(--color-glass-border)]
        bg-[var(--color-glass)]
        p-4
        lg:flex-row
      "
    >
      {personalInfos.map((info: PersonalInfoType, index: number) => {
        const Icon = info.icon;

        return (
          <div
            key={info.id}
            className="flex w-full min-w-0 flex-col items-center lg:flex-row"
          >
            <div className="w-full min-w-0">
              <InfoItem
                icon={<Icon size={30} />}
                label={info.label}
                value={info.value}
              />
            </div>

            {index < personalInfos.length - 1 && (
              <div
                aria-hidden="true"
                className="
                  mt-2
                  h-px
                  w-full
                  shrink-0
                  bg-[var(--color-border)]
                  lg:mx-4
                  lg:mt-0
                  lg:h-10
                  lg:w-px
                "
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
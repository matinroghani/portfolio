import { personalInfos } from "@/data/personalInfos";
import PersonalInfo_Card from "./components/PersonalInfo_Card/PersonalInfo_Card";
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
            className="flex w-full flex-col items-center lg:flex-row"
          >
            <div className="w-full min-w-0">
              <PersonalInfo_Card
                icon={<Icon size={30} />}
                label={info.label}
                value={info.value}
              />
            </div>

            {index < personalInfos.length - 1 && (
              <div
                aria-hidden="true"
                className="
                  h-px
                  w-full
                  mt-2
                  lg:mt-0
                  shrink-0
                  bg-[var(--color-border)]
                  lg:mx-4
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
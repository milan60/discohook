import React from "react"
import { Manager } from "../../state/types/Manager"
import { AppearanceModal } from "../components/AppearanceModal"

export const spawnAppearanceModal = (manager: Manager) => {
  manager.stores.modalStore.spawn({
    name: "appearance",
    render: () => <AppearanceModal />,
  })
}

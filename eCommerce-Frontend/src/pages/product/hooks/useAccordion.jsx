import React, { useState } from 'react'

const useAccordion = () => {
  const [openAcc, setOpenAcc] = useState("INFORMATION");

  const toggleAcc = (accLabel) => setOpenAcc((prev) => prev === accLabel ? null : accLabel)
  return {
    openAcc, toggleAcc
  }
}

export default useAccordion;
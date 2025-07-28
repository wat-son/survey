'use client'
import React, { useEffect, useState } from 'react'
import { Box, List, ListItemButton, Tooltip } from '@mui/material'

const VirtIndicator = ({ surveyData }: { surveyData: { id: string }[] }) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  // スクロール位置を監視して、どの設問が表示されているかを判定
  useEffect(() => {
    const handleScroll = () => {
      for (const item of surveyData) {
        const el = document.getElementById(item.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveId(item.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [surveyData])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 100,
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        p: 2,
        overflowY: 'auto',
      }}
    >
      <List dense>
        {surveyData.map((item, index) => (
          <Tooltip title={`Q${index + 1}`} placement="right" key={item.id}>
            <ListItemButton
              onClick={() => scrollTo(item.id)}
              sx={{
                width: 24,
                height: 24,
                minWidth: 0,
                borderRadius: '50%',
                backgroundColor: activeId === item.id ? 'primary.main' : 'grey.300',
                '&:hover': {
                  backgroundColor: activeId === item.id ? 'primary.dark' : 'grey.400',
                },
                transition: 'background-color 0.3s',
                m: '4px auto',
              }}
            />
          </Tooltip>
        ))}
      </List>
    </Box>
  )
}

export default VirtIndicator

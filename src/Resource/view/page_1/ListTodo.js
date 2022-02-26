import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField';
import { border } from '@mui/system';
import styleCustom from './Page_1.module.scss'
import { useContext, useRef, useEffect } from 'react';
import ContextList from './Todo/context'
import { inputJob, createJob, deleteJob } from './Todo/action'

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const [state, dispatch] = useContext(ContextList)
  const { setJob, jobs } = state
  const emtryJobs = []
  const listRef = useRef()

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleInput = (e) => {
      dispatch(inputJob(e.target.value))
  }
  const handleBtn = () => {
    if(setJob !== '') {
        dispatch(createJob(setJob))
        dispatch(inputJob(''))
    }
  }
  const handledelete = (index) => {
      dispatch(deleteJob(index))
  }

  useEffect(() => {
    if(JSON.stringify(jobs) === JSON.stringify(emtryJobs)){
          listRef.current.classList.add(styleCustom.bgSubList)
    }else {
      listRef.current.classList.remove(styleCustom.bgSubList)
    }
  }, [jobs])

  return (
    <div style={{margin: 'auto'}}>
    <div style={{marginBottom: '40px', display: 'flex', alignItems: 'center'}}>
        <TextField  id="outlined-basic" label="Create New Job" variant="outlined" value={setJob} onChange={handleInput} />
        <button style={{height: '56px',
         backgroundColor: 'transparent',
         border: '1px solid #999',
         borderRadius: '4px',
         marginLeft: '10px'}}
         onClick={(handleBtn)}
         >ADD</button>
    </div>
    <List ref={listRef} className={styleCustom.List}  >
      {jobs.map((value, index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={() => handledelete(index)}>
                <DeleteOutlineIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
      </div>
  );
}

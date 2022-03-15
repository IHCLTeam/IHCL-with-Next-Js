import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image'
import imageLoader from '../pages/imageLoader'

function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState("");
  const handleClick = (d) => {
    setAnchorEl(d);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <div className='topbar'>
      <div>
      <Button
          id="demo-positioned-button"
         
        >
         <Link href="/"><a>
         <Image loader={imageLoader} src='https://www.ihcltata.com/content/dam/tajhotels/ihcl/Logos/IHCL-LOGO-white.png' alt="Not Found" width={50} height={12} /> &nbsp; &nbsp; HOME 
           </a></Link>
        </Button>
     
      </div>

      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={anchorEl == "brands" ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl == "brands" ? 'true' : undefined}
          onClick={() => handleClick("brands")}
          onMouseOver={() => handleClick("brands")}
        >
          BRANDS
        </Button>
        <Menu className='brand'
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={anchorEl == "brands"}
          onClose={handleClose}
          onMouseLeave={handleClose}
          anchorOrigin={{ vertical: 'top' }}
          transformOrigin={{
            vertical: 'top',
          }}
        >
          <MenuItem onClick={handleClose}> <Link href="/venkatesh"><a>  OUR BRANDS</a></Link></MenuItem>
          <MenuItem onClick={handleClose}>TAJ</MenuItem>
          <MenuItem onClick={handleClose}>SELEQTIONS</MenuItem>
          <MenuItem onClick={handleClose}>VIVANTA</MenuItem>
          <MenuItem onClick={handleClose}>GINGER</MenuItem>
          <MenuItem onClick={handleClose}>ama Stays &Trails</MenuItem>
        </Menu>
      </div>
      <Button
        id="demo-positioned-button"
        aria-controls={anchorEl == "company" ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl == "company" ? 'true' : undefined}
        onClick={() => handleClick("company")}
        onMouseOver={() => handleClick("company")}

      >
        COMPANY
      </Button>
      <Menu className='company'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={anchorEl == "company"}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/amit"><a>COMPANY</a></Link></MenuItem>
        <MenuItem onClick={handleClose}>LEGACY</MenuItem>
        <MenuItem onClick={handleClose}>ABOUT US</MenuItem>
        <MenuItem onClick={handleClose}>LEADERSHIP</MenuItem>
      </Menu>
      <Button
        id="demo-positioned-button"
        aria-controls={anchorEl == "INVESTORS" ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl == "INVESTORS" ? 'true' : undefined}
        onClick={() => handleClick("INVESTORS")}
        onMouseOver={() => handleClick("INVESTORS")}
      >
        INVESTORS
      </Button>
      <Menu className='investors'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={anchorEl == "INVESTORS"}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/aditya"><a>INVESTORS</a></Link></MenuItem>
      </Menu>
      <Button
        id="demo-positioned-button"
        aria-controls={anchorEl == "DEVELOPMENT" ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl == "DEVELOPMENT" ? 'true' : undefined}
        onClick={() => handleClick("DEVELOPMENT")}
        onMouseOver={() => handleClick("DEVELOPMENT")}
      >
        DEVELOPMENT
      </Button>
      <Menu className='development'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={anchorEl == "DEVELOPMENT"}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/development"><a>DEVELOPMENT</a></Link></MenuItem>
        <MenuItem onClick={handleClose}>COMPETITIVE STRENGTH</MenuItem>
        <MenuItem onClick={handleClose}>
          DEVELOPMENT SUPPORT</MenuItem>
        <MenuItem onClick={handleClose}>RESOURCES</MenuItem>
      </Menu>
      <Button
        id="demo-positioned-button"
        aria-controls={anchorEl == "RESPONSIBILITY" ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl == "RESPONSIBILITY" ? 'true' : undefined}
        onClick={() => handleClick("RESPONSIBILITY")}
        onMouseOver={() => handleClick("RESPONSIBILITY")}
      >
        RESPONSIBILITY
      </Button>
      <Menu className='responsibility'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={anchorEl == "RESPONSIBILITY"}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/santosh"><a>RESPONSIBILITY</a></Link></MenuItem>
        <MenuItem onClick={handleClose}>WELFARE</MenuItem>
      </Menu>
      <Button
        id="demo-positioned-button"
        aria-controls={anchorEl == "CAREERS" ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl == "CAREERS" ? 'true' : undefined}
        onClick={() => handleClick("CAREERS")}
        onMouseOver={() => handleClick("CAREERS")}
      >
        CAREERS
      </Button>
      <Menu className='careers'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={anchorEl == "CAREERS"}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>CAREERS</MenuItem>
        <MenuItem onClick={handleClose}>APPLY NOW</MenuItem>
      </Menu>
      <Button
        id="demo-positioned-button"
        aria-controls={anchorEl == "PRESSROOM" ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl == "PRESSROOM" ? 'true' : undefined}
        onClick={() => handleClick("PRESSROOM")}
        onMouseOver={() => handleClick("PRESSROOM")}
      >
        PRESSROOM
      </Button>
      <Menu className='pressroom'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={anchorEl == "PRESSROOM"}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>PRESSROOM</MenuItem>
      </Menu>
      <Button
        id="demo-positioned-button"
        aria-controls={anchorEl == "contact" ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl == "contact" ? 'true' : undefined}
        onClick={() => handleClick("contact")}
        onMouseOver={() => handleClick("contact")}
      >CONTACT
      </Button>
      <Menu className='contact'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={anchorEl == "contact"}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/contact"><a>CONTACT</a></Link></MenuItem>
      </Menu>
    </div>
  );
}
export default PositionedMenu;
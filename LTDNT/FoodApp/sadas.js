int tinh_tien_thuong (int so_nam, string xep_loai):
   string nhiem_vu = "";                   # (1)
   float he_so = 1.0;                     # (2)    
    if (so_nam > 5)                 # (3)
        he_so = 1.5;                 # (4)
    else
        he_so = 1.0;                 # (5)        
    if (xep_loai == "A")             # (6)
        {nhiem_vu = "Xuat sac";      # (7)
        tien_thuong = 1000 * he_so;}  # (8)
    elseif (xep_loai == "B")           # (9)
        {nhiem_vu = "Tot" ;           # (10)
        tien_thuong = 500 * he_so;}   # (11)
    else
        tien_thuong = 0;             # (12)        
    return tien_thuong ;             # (13)

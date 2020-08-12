def csv_parse(filepath, delimeter, new_filepath):
    with open(filepath, "r") as f:
        with open(new_filepath, "a+") as r:
            lines = 0
            
            while True:
                row = f.readline()
                lines += 1
                row_str = ""
                if not row:
                    print("DONE")
                    break
                for item in row:
                    row_str += item
                    row_str = row_str.split(",")
                    row_str = " ".join(row_str)
                    r.write(row_str)
                    row_str = ""
                
                print("Line ", lines, " read")
                
    print("Done!")

csv_parse(r"C:\Users\USER\Projects\Flue VCF\pumsa.csv", ",", r"C:\Users\USER\Projects\Flue VCF\pumsa_parsed.txt")

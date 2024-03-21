import csv
i = 1
column_headers = ["MatchUrlPrefix", "RedirectUrl", "StatusCode", "Enabled"]
with open('redirect_csv_file.csv', 'w') as csvf:
    writer = csv.writer(csvf)
    writer.writerow(column_headers)
    for _ in range(50):
        row = ["/ip/"+str(i)+"/", "/i/", 301, True]
        writer.writerow(row)

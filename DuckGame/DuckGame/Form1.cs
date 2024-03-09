using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;
using System.IO;
using System.Windows.Forms;

namespace DuckGame
{
    public partial class Form1 : Form
    {
        // ATM Identifiers
        string[] brandName;
        string[] atmNum;

        // Location Identifiers
        string[] streetName;
        string[] country;
        string[] townName;
        string[] postCode;
        string[] longitude;
        string[] latitude;

        public Form1()
        {
            InitializeComponent();
            LoadDataFromJson();
        }

        private void LoadDataFromJson()
        {
            try
            {
                // Read JSON data from file
                string jsonString = File.ReadAllText("json.json");

                // Split the JSON content by lines
                string[] lines = jsonString.Split('\n');

                // Initialize arrays with fixed size
                brandName = new string[lines.Length];
                atmNum = new string[lines.Length];
                streetName = new string[lines.Length];
                country = new string[lines.Length];
                townName = new string[lines.Length];
                postCode = new string[lines.Length];
                longitude = new string[lines.Length];
                latitude = new string[lines.Length];

                // Process each line
                for (int i = 0; i < lines.Length; i++)
                {
                    // Remove any leading or trailing whitespace
                    string trimmedLine = lines[i].Trim();

                    // Skip empty lines
                    if (string.IsNullOrEmpty(trimmedLine))
                        continue;

                    // Split each line by the colon (:) separator
                    string[] parts = trimmedLine.Split(':');

                    // Skip lines without the expected format
                    if (parts.Length != 2)
                        continue;

                    // Extract the property value
                    string propertyValue = parts[1].Trim();

                    // Add the property value to the corresponding array based on the index
                    switch (parts[0].Trim())
                    {
                        case "brandName":
                            brandName[i] = propertyValue;
                            break;
                        case "atmNum":
                            atmNum[i] = propertyValue;
                            break;
                        case "streetName":
                            streetName[i] = propertyValue;
                            break;
                        case "country":
                            country[i] = propertyValue;
                            break;
                        case "townName":
                            townName[i] = propertyValue;
                            break;
                        case "postCode":
                            postCode[i] = propertyValue;
                            break;
                        case "longitude":
                            longitude[i] = propertyValue;
                            break;
                        case "latitude":
                            latitude[i] = propertyValue;
                            break;
                        default:
                            // Ignore unknown properties
                            break;
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An error occurred while loading data from JSON: {ex.Message}");
            }
        }
    }
}
